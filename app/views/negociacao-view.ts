import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacaoView extends View<Negociacoes> {
  protected template(negociacoes: Negociacoes): string {
    return `
      <table class="table table-bordered table-hover">
        <thead>
          <tr>
            <th>
              DATA
            </th>
            <th>
              QUANTIDADE
            </th>
            <th>
              VALOR
            </th>
          </tr>
        </thead>
        <tbody>
          ${negociacoes
            .lista()
            .map(
              (negociacao) =>
                `<tr>
              <td>
              ${new Intl.DateTimeFormat().format(negociacao.data)}
              </td>
              <td>
              ${negociacao.quantidade}
              </td>
              <td>
              ${negociacao.valor}
              </td>
            </tr>`
            )
            .join("")}
        </tbody>
      </table>
    `;
  }
}
