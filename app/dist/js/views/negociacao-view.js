var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escape } from "../decorators/escape.js";
import { View } from "./view.js";
export class NegociacaoView extends View {
    template(negociacoes) {
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
            .map((negociacao) => `<tr>
              <td>
              ${new Intl.DateTimeFormat().format(negociacao.data)}
              </td>
              <td>
              ${negociacao.quantidade}
              </td>
              <td>
              ${negociacao.valor}
              </td>
            </tr>`)
            .join("")}
        </tbody>
      </table>
    `;
    }
}
__decorate([
    escape
], NegociacaoView.prototype, "template", null);
//# sourceMappingURL=negociacao-view.js.map