import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <th>Title</th>
          <th>Value</th>
          <th>Category</th>
          <th>Date</th>
        </thead>
        <tbody>
          <tr>
            <td>Freelancer</td>
            <td className="deposit">$1000</td>
            <td>Work</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Pay credit card</td>
            <td className="withdraw">-$500</td>
            <td>Credit card</td>
            <td>28/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}