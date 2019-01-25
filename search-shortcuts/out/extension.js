'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
function activate({ subscriptions }) {
    subscriptions.push(vscode.commands.registerCommand("extension.search-shortcuts", () => {
    }));
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map