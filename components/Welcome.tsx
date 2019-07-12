export interface Props {
  message: string;
}

function Welcome({ message }: Props) {
  return <h1>{message}</h1>;
}

export default Welcome;
