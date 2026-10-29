export interface ButtonProps { variant?: 'primary'|'secondary'|'ghost'|'danger'; size?: 'sm'|'md'; icon?: string; children?: React.ReactNode; onClick?: () => void; disabled?: boolean; }
export declare function Button(props: ButtonProps): JSX.Element;
