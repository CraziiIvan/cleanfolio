declare module 'react-syntax-highlighter' {
    import * as React from 'react';
    
    export interface SyntaxHighlighterProps {
      language?: string;
      style?: any;
      children?: string;
      showLineNumbers?: boolean;
      wrapLines?: boolean;
      customStyle?: React.CSSProperties;
      lineProps?: any;
    }
  
    export class Prism extends React.Component<SyntaxHighlighterProps> {}
  }
  