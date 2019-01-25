'use strict';

import * as vscode from 'vscode';

export function activate({ subscriptions }: vscode.ExtensionContext) {

	subscriptions.push(vscode.commands.registerCommand("extension.search-shortcuts", () => {
		
	}));
}
