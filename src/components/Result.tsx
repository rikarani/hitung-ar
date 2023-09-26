import { Typography, Progress } from "@material-tailwind/react";

export default function Result(): React.JSX.Element {
  return (
    <div>
      <Typography variant="lead" color="gray" className="text-white">
        Result
      </Typography>
      <div>
        <Typography variant="paragraph" color="gray" className="text-white">
          Butuh 1000000 EXP Lagi Untuk Mencapai AR 60
        </Typography>
        <Progress value={100} size="lg" label="Completed" className="mb-3 mt-1" />
      </div>
    </div>
  );
}
