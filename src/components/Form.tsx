import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input, Typography, Button } from "@material-tailwind/react";

export default function Form(): React.JSX.Element {
  const [target, setTarget] = useState<number>(0);

  const schema = z.object({
    sekarang: z.coerce.number().min(1, { message: "Minimal AR 1" }).max(60, { message: "Maksimal AR 60" }),
    target: z.coerce
      .number()
      .min(target === 60 ? target : target + 1, { message: `Target AR harus lebih tinggi dari AR Sekarang` })
      .max(60, { message: "Maksimal AR 60" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <form className="mt-1.5" onSubmit={handleSubmit((data) => console.log(data))}>
        <Typography variant="lead" color="white">
          Input
        </Typography>
        <div className="mt-2.5 space-y-4">
          <div>
            <Input
              type="number"
              onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
              {...register("sekarang", { onChange: (e: React.ChangeEvent<HTMLInputElement>) => setTarget(parseInt(e.target.value)) })}
              label="AR Sekarang"
              variant="outlined"
              color="white"
              error={!!errors?.sekarang?.message}
            />
            <Typography variant="small" className="mt-0.5 font-medium text-red-500">
              {errors?.sekarang?.message || ""}
            </Typography>
          </div>
          <div>
            <Input type="number" onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} {...register("target")} label="Target AR" variant="outlined" color="white" error={!!errors?.target?.message} />
            <Typography variant="small" className="mt-0.5 font-medium text-red-500">
              {errors?.target?.message || ""}
            </Typography>
          </div>
          <Button type="submit" fullWidth variant="outlined" className="border-slate-300 py-1.5 text-lg capitalize text-slate-300 focus:ring-0">
            Hitung
          </Button>
        </div>
      </form>
    </div>
  );
}
