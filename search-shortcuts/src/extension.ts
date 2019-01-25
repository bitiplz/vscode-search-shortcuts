'use strict';

import * as vscode from 'vscode';

let FilterItem : vscode.StatusBarItem;
let isFirstOn : boolean = false;

export function activate({ subscriptions }: vscode.ExtensionContext) {

	const ActivationCommand = "extension.search-shortcuts.activate";
	const ToggleCommand = "extension.search-shortcuts.toggle-first";

	FilterItem = vscode.window.createStatusBarItem( vscode.StatusBarAlignment.Right, 100 );
	FilterItem.command = ToggleCommand;

	subscriptions.push( FilterItem );
	subscriptions.push( vscode.commands.registerCommand( ToggleCommand, () => {
		isFirstOn = !isFirstOn;
		updateFilterButton();
	}));

	vscode.commands.registerCommand( ActivationCommand, () => {
		updateFilterButton();
		FilterItem.show();
		console.log("extension.search-shortcuts activated");
	});

}

function updateFilterButton() : void {
	FilterItem.text = isFirstOn ? '[filter]' : ' filter ';
}
