import Form from "./Form";
import Result from "./Result";

export default function Main(): React.JSX.Element {
  return (
    <div className="mt-3 divide-y divide-white rounded-md bg-slate-700 px-3 py-2">
      <Form />
      <Result />
    </div>
  );
}
