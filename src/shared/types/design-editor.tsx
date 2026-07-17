export interface EditorColor {
  id: number;
  name: string;
  color: string;
}

export interface Position {
  x: number;
  y: number;
}

export interface DesignEditorProps {
  frontImage: string;
  backImage: string;
  colors?: EditorColor[] | null;
  colorPickerValue?: string;
  onColorPickerChange?: ((color: string) => void) | null;
}