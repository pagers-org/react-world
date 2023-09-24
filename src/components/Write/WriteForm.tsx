import { myTheme } from "@/utils/codemirrorOption";
import { customKeymap } from "@/utils/codemirrorOption";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { javascript } from "@codemirror/lang-javascript";
import { languages } from "@codemirror/language-data";
import CodeMirror from "@uiw/react-codemirror";
import { EditorView } from "@codemirror/view";

type WriteFormType = {
  bodyContent: string;
  bodyContentHandler: (value: string) => void;
};

export default function WriteForm({
  bodyContent,
  bodyContentHandler,
}: WriteFormType) {
  return (
    <>
      <CodeMirror
        theme={myTheme}
        value={bodyContent}
        id={"body"}
        onChange={bodyContentHandler}
        height="100vh"
        basicSetup={{
          foldGutter: false,
          lineNumbers: false,
          highlightActiveLine: false,
          drawSelection: true,
          autocompletion: false,
        }}
        editable={true}
        extensions={[
          markdown({
            base: markdownLanguage,
            codeLanguages: languages,
          }),
          customKeymap,
          EditorView.lineWrapping,
          javascript({ jsx: true, typescript: true }),
        ]}
      />
    </>
  );
}
