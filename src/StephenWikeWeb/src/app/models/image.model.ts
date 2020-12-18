export class Image {
    FilePath: string = "";
    Title: string = "";
    Name: string = "";
    Topic: string = "";
    Height: number = 0;
    Width: number = 0;
    Created: number;
    Description: string;

    public constructor (init?:Partial<Image>)
    {
        Object.assign(this, init);
    }

    get AspectRatio(): number {
        if (this.Width == 0) return 0;
        return this.Height / this.Width;
    }
}