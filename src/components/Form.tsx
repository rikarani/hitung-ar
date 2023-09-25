import { Input, Typography, Button, Card } from "@material-tailwind/react";

export default function Form(): React.JSX.Element {
  return (
    <Card color="transparent" className="mb-4">
      <Typography variant="lead" color="gray" className="text-white">
        Input
      </Typography>
      <form className="mt-2 space-y-3.5">
        <div>
          <Input type="number" variant="outlined" label="AR Sekarang" color="white" />
          <Typography color="red" className="font-normal text-red-200">
            pala bapak engkau
          </Typography>
        </div>
        <div>
          <Input type="number" variant="outlined" label="AR Sekarang" color="white" />
          <Typography color="red" className="font-normal text-red-200">
            pala bapak engkau
          </Typography>
        </div>
        <Button onClick={() => alert("pala bapak engkau")} fullWidth variant="outlined" className="border-slate-300 py-1.5 text-lg capitalize text-slate-300 focus:ring-0">
          Hitung
        </Button>
      </form>
    </Card>
  );
}
