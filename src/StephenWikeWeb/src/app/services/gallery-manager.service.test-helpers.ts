import { Image } from '../models/image.model';

export class TestStage {
  LandscapeRows: number = 0;
  SquaredRows = 0;
  PortraitRows = 0;

    AssertOrientationPerRow = (gallery: Image[][]): boolean => {
      gallery.forEach(row => {
        let ratios: number[] = [];
        row.forEach(img => {
          ratios.push(img.AspectRatio);
        })
        var isOriented = this.AssertOrientation(ratios);
        if(!isOriented) return false;
      })
      return true;
    }

    AssertOrientation(ratios: number[]): boolean {
      if (ratios.length == 0) return false;
      let orientation: string;
      if (ratios[0] < 1) { orientation = "Landscape"; ++this.LandscapeRows }
      if (ratios[0] == 1) { orientation = "Squared"; ++this.SquaredRows }
      if (ratios[0] > 1) { orientation = "Portrait"; ++this.PortraitRows }

      ratios.forEach(ratio => {
        switch(orientation)
        {
          case "Landscape": {
            if (ratio !< 1) return false;
            break;
          }
          case "Squared": {
            if (ratio != 1) return false;
            break;
          }
          case "Portrait": {
            if (ratio !> 1) return false;
            break;
          }
        }
      });
      return true;
    }

  FriendlyOrientationRowOrder(gallery: Image[][]): string {
    let orientationOrder: string[] = [];

    gallery.forEach(row => {
      if (row[0].AspectRatio > 1) orientationOrder.push('p');
      else if (row[0].AspectRatio < 1) orientationOrder.push('l');
      else orientationOrder.push('s');
    })

    return orientationOrder.toString();
  }
}