import { Card } from "@material-tailwind/react";
import Form from "./Form";
import Result from "./Result";

export default function Main(): React.JSX.Element {
  return (
    <Card color="transparent" className="mt-3 divide-y divide-white rounded-md bg-slate-700 px-3 py-2">
      <Result />
      <Form />
    </Card>
  );
}
