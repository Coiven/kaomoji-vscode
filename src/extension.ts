// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import newOne from './newOne';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('kaomoji.newOne', () => {
		// The code you place here will be executed every time your command is executed

		let kaomoji = newOne();

		const {activeTextEditor} = vscode.window;

		activeTextEditor?.edit((editBuilder) => {
			//获取光标位置
			var position = new vscode.Position(activeTextEditor.selection.active.line, activeTextEditor.selection.active.character);
			//在光标位置插入字符串
			editBuilder.insert(position, kaomoji);
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
