import FormTodo from "../components/FormTodo";
interface Props {
  onSubmit: (e: React.FormEvent) => void;
  textTodo: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const AddTodo = ({ onSubmit, textTodo, onChange }: Props) => {
  return (
    <div>
      <FormTodo onSubmit={onSubmit} textTodo={textTodo} onChange={onChange} />
    </div>
  );
};

export default AddTodo;
