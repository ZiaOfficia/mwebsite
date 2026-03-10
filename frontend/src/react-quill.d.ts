declare module "react-quill-new" {
  import React from "react";
  interface ReactQuillProps {
    theme?: string;
    value?: string;
    onChange?: (content: string) => void;
    className?: string;
    placeholder?: string;
    modules?: any;
    formats?: string[];
    // Add other props as needed
  }
  export default class ReactQuillNew extends React.Component<ReactQuillProps> {}
}
