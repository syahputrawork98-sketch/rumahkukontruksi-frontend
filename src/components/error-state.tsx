type Props = {
  title?: string;
  message: string;
};

export function ErrorState({ title = "Error", message }: Props) {
  return (
    <div style={{ padding: 16, border: "1px solid #f99", color: "#900" }}>
      <strong>{title}</strong>
      <div>{message}</div>
    </div>
  );
}
