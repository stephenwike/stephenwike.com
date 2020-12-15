import { Image } from "./image.model";

describe('Models.Image', () => {
  let testCollection = [{Height: 3, Width: 4, Expected: 0.75},
   {Height: 5, Width: 4, Expected: 1.25},
   {Height: 10, Width: 10, Expected: 1}]
   
  testCollection.forEach(context => {
    it('should return correct aspect ratio', () => 
    {
      let image: Image = new Image();
      image.Height = context.Height;
      image.Width = context.Width;
      
      expect(image.AspectRatio).toBe(context.Expected);
    }); 
  })
});