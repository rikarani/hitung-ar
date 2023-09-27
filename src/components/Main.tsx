import { Typography, Progress, Card, Input, Button } from "@material-tailwind/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { hitungAR } from "@/utlis/hitungAR";

type Data = {
  target: number;
  progress: number;
  exp: number;
  butuh: number;
  hari: number;
};

export default function Main(): React.JSX.Element {
  const [sekarang, setSekarang] = useState<number>(0);
  const [data, setData] = useState<Data | Record<string, never>>({});

  const schema = z.object({
    ar: z.coerce.number().min(1, { message: "Minimal AR 1" }).max(60, { message: "Maksimal AR 60" }),
    exp: z.coerce.number().default(0),
    target: z.coerce
      .number()
      .min(sekarang === 60 ? sekarang : sekarang + 1, { message: "Target AR Harus Lebih Tinggi dari AR Sekarang" })
      .max(60, { message: "Maksimal AR 60" }),
  });

  const { register, handleSubmit, formState, reset } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  function submit(data: z.infer<typeof schema>): void {
    setData(hitungAR(data));
    reset();
  }

  return (
    <Card color="transparent" className="mt-3 divide-y divide-white rounded-none bg-slate-700 px-3 py-2 sm:rounded-2xl">
      <div>
        <Typography variant="lead" color="white">
          Result
        </Typography>
        <div>
          <div className="flex justify-between">
            <Typography variant="h6" color="white">
              {sekarang === 60 ? "resmi tamat" : `${data.progress || 0}% Completed` || 0}
            </Typography>
            <Typography variant="h6" color="white">
              {(data.butuh && `${data.exp} / ${data.butuh}`) || ""}
            </Typography>
          </div>
          <Progress value={sekarang === 60 ? 100 : data.progress} size="md" color="green" className={`mt-1 ${formState.isSubmitted ? undefined : "mb-3"}`} />
          <Typography variant="paragraph" color="white" className="mb-1 mt-1">
            {sekarang === 60 ? "" : (data.hari && `Butuh ±${Math.ceil(data.hari)} Hari untuk mencapai AR ${data.target}`) || ""}
          </Typography>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit((data) => submit(data))}>
          <Typography variant="lead" color="white">
            Input
          </Typography>
          <div className="mt-1.5">
            <div className="space-y-3.5">
              <div>
                <Input
                  type="number"
                  onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()}
                  {...register("ar", { onBlur: (e: React.FocusEvent<HTMLInputElement>) => setSekarang(parseInt(e.target.value)) })}
                  label="AR Sekarang"
                  variant="outlined"
                  color="white"
                  error={!!formState.errors.ar?.message}
                />
                <Typography variant="small" className={`mt-0.5 font-medium text-red-500 ${!formState.errors.ar?.message ? "hidden" : "-mb-1"}`}>
                  {formState.errors.ar?.message || ""}
                </Typography>
              </div>
              <div>
                <Input type="number" onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} {...register("target")} label="Target AR" variant="outlined" color="white" error={!!formState.errors.target?.message} />
                <Typography variant="small" className={`mt-0.5 font-medium text-red-500 ${!formState.errors.target?.message ? "hidden" : "-mb-1"}`}>
                  {formState.errors.target?.message || ""}
                </Typography>
              </div>
              <div>
                <Input {...register("exp")} type="number" onKeyDown={(e) => ["e", "E", "+", "-"].includes(e.key) && e.preventDefault()} label="EXP Sekarang" variant="outlined" color="white" />
              </div>
            </div>
            <Button type="submit" fullWidth variant="outlined" className="mt-3.5 border-slate-300 py-1.5 text-lg capitalize text-slate-300 focus:ring-0">
              Hitung
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
}
