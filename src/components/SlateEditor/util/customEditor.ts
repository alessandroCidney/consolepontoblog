// Slate
import { BaseEditor, Editor, Text, Transforms } from 'slate';
import { ReactEditor } from 'slate-react';

// Types
type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
	interface CustomTypes {
		Editor: BaseEditor & ReactEditor
		Element: CustomElement
		Text: CustomText
	}
}

export const CustomEditor = {
	isBoldMarkActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: n => n.bold === true,
			universal: true
		});

		return !!match;
	},

	isItalicMarkActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: n => n.italic === true,
			universal: true
		});

		return !!match;
	},

	isCodeBlockActive(editor) {
		const [match] = Editor.nodes(editor, {
			match: n => n.type === 'code'
		});

		return !!match;
	},

	isTitle1Active(editor) {
		const [match] = Editor.nodes(editor, {
			match: n => n.type === 'title-1'
		});

		return !!match;
	},

	isTitle2Active(editor) {
		const [match] = Editor.nodes(editor, {
			match: n => n.type === 'title-2'
		});

		return !!match;
	},

	isTitle3Active(editor) {
		const [match] = Editor.nodes(editor, {
			match: n => n.type === 'title-3'
		});

		return !!match;
	},

	toggleBoldMark(editor) {
		const isActive = CustomEditor.isBoldMarkActive(editor);

		Transforms.setNodes(
			editor,
			{ bold: isActive ? null : true },
			{ match: n => Text.isText(n), split: true }
		);
	},

	toggleItalicMark(editor) {
		const isActive = CustomEditor.isItalicMarkActive(editor);

		Transforms.setNodes(
			editor,
			{ italic: isActive ? null : true },
			{ match: n => Text.isText(n), split: true }
		);
	},

	toggleCodeBlock(editor) {
		const isActive = CustomEditor.isCodeBlockActive(editor);

		Transforms.setNodes(
			editor,
			{ type: isActive ? null : 'code' },
			{ match: n => Editor.isBlock(editor, n) }
		);
	},

	toggleTitle1(editor) {
		const isTitleActive = CustomEditor.isTitle1Active(editor);

		Transforms.setNodes(
			editor,
			{ type: isTitleActive ? null : 'title-1'},
			{ match: n => Editor.isBlock(editor, n) }
		);
	},

	toggleTitle2(editor) {
		const isTitleActive = CustomEditor.isTitle2Active(editor);

		Transforms.setNodes(
			editor,
			{ type: isTitleActive ? null : 'title-2'},
			{ match: n => Editor.isBlock(editor, n) }
		);
	},

	toggleTitle3(editor) {
		const isTitleActive = CustomEditor.isTitle3Active(editor);

		Transforms.setNodes(
			editor,
			{ type: isTitleActive ? null : 'title-3'},
			{ match: n => Editor.isBlock(editor, n) }
		);
	},

	changeToNormalType(editor) {
		Transforms.setNodes(
			editor,
			{ type: null },
			{ match: n => Editor.isBlock(editor, n) }
		);
	}
}
