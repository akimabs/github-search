export interface TextProp {
  type: 'bold' | 'semibold' | 'regular' | 'thin';
  align?: 'center' | 'right' | 'left' | 'justify';
  size?: 'large_title' | 'title' | 'subtitle' | 'caption' | 'description';
  color?: string;
  style?: any;
  children: any;
}
