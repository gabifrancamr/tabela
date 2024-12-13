import { Stack, Table } from "@chakra-ui/react"

const items = [
  { id: 1, name: "Supermercado", category: "Alimentação", payment: "Cartão de Crédito", price: 299.99 },
  { id: 2, name: "Academia", category: "Saúde", payment: "Cartão de Débito", price: 99.99 },
  { id: 3, name: "Cinema", category: "Lazer", payment: "Pix", price: 29.99 },
  { id: 4, name: "Uber", category: "Transporte", payment: "Cartão de Crédito", price: 29.99 },
  { id: 5, name: "Vestido", category: "Roupas", payment: "Cartão de Crédito", price: 199.99 },
]

export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-center text-xl font-bold">Tabela de gastos financeiros</h1>
      <Stack gap="10">
      <Table.ScrollArea borderWidth="1px">
        <Table.Root  variant="outline" interactive showColumnBorder>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Nome</Table.ColumnHeader>
              <Table.ColumnHeader>Categoria</Table.ColumnHeader>
              <Table.ColumnHeader>Forma de Pagamento</Table.ColumnHeader>
              <Table.ColumnHeader textAlign="end">Valor</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {items.map((item) => (
              <Table.Row key={item.id}>
                <Table.Cell>{item.name}</Table.Cell>
                <Table.Cell>{item.category}</Table.Cell>
                <Table.Cell>{item.payment}</Table.Cell>
                <Table.Cell textAlign="end">R${item.price}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
        </Table.ScrollArea>
      </Stack>

    </div>
  );
}
