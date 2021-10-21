export interface Link {
  attach?: boolean;
  nested?: Link[];
  title: string;
  type?: '_blank' | '_self';
  url?: string;
}

export interface LinkGroup {
  title: string;
  links: Link[];
}
