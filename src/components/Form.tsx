import { Input, Typography, Button } from "@material-tailwind/react";

export default function Form(): React.JSX.Element {
  return (
    <div className="mb-4 ">
      <Typography variant="lead" color="gray" className="text-white">
        Input
      </Typography>
      <div className="mt-3 space-y-3.5">
        <div>
          <Input label="AR Sekarang" variant="outlined" color="white" type="number" />
          <Typography variant="small" color="red" className="mt-0.5 font-normal text-red-200">
            pala bapak engkau
          </Typography>
        </div>
        <div>
          <Input label="AR Sekarang" variant="outlined" color="white" type="number" />
          <Typography variant="small" color="red" className="mt-0.5 font-normal text-red-200">
            pala bapak engkau
          </Typography>
        </div>
        <div>
          <Button type="button" fullWidth onClick={() => alert("pala bapak engkau")} variant="outlined" color="teal" className="border-slate-300 py-1.5 text-lg capitalize text-slate-300 focus:ring-0">
            Hitung
          </Button>
        </div>
      </div>
    </div>
  );
}
