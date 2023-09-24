import { Typography, Progress } from "@material-tailwind/react";

export default function Result(): React.JSX.Element {
  return (
    <div>
      <Typography variant="lead" color="gray" className="mt-2 text-white">
        Result
      </Typography>
      <div>
        <Typography variant="paragraph" color="gray" className="mb-0.5 text-white">
          Butuh 100 Hari Lagi Untuk Mencapai AR 60
        </Typography>
        <Progress value={100} size="sm" label="Completed" />
      </div>
    </div>
  );
}
