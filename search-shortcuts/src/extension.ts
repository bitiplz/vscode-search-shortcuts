'use strict';

import * as vscode from 'vscode';

class FilterNode {
	readonly command: string;
	readonly name: string;
	readonly pattern: string;
	isOn: boolean;

    constructor( name: string, pattern: string ) {
		this.command = 'extension.search-shortcuts.toggle-' + name;
		this.name = name;
		this.pattern = pattern;
		this.isOn = false;
	}
	
    toggle() : void {
        this.isOn = !this.isOn;
	}
	
	displayString() : string {
		return `[${this.isOn ? 'x' : ' '}].${this.name}`;
	}

}

const Filters : FilterNode[] = [
	new FilterNode( "lua", "*.lua" ),
	new FilterNode( "xs", "*.xs" ),
	new FilterNode( "ui", "*.ui" ),
];

let Buttons : vscode.StatusBarItem[] = [];

export function activate({ subscriptions }: vscode.ExtensionContext) {
	for (let i = 0; i < Filters.length; i++) {
		const element = Filters[i];

		let widget: vscode.StatusBarItem = vscode.window.createStatusBarItem( vscode.StatusBarAlignment.Right, 100+i );
		widget.command = element.command;
		Buttons.push(widget);
		subscriptions.push(widget);

		subscriptions.push(vscode.commands.registerCommand(element.command, () => {
				element.toggle();
				widget.text = element.displayString();
				vscode.window.showInformationMessage(`Toggled: ${element.name}` );
		}));
	}

	subscriptions.push(vscode.commands.registerCommand("extension.search-shortcuts", () => {
		for (let i = 0; i < Buttons.length; i++) {
			Buttons[i].text = Filters[i].displayString()
			Buttons[i].show();
		}
	}));
}
