interface Props {
  client: {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    active: boolean;
  };
}

export default function Home({ client }: Props) {
  return (
    <div className="container">
      <span>id: {client.id}</span>
      <span>FistName: {client.firstName}</span>
      <span>LastName: {client.lastName}</span>
      <span>Email: {client.email}</span>
      <span>Age: {client.age}</span>
    </div>
  );
}
