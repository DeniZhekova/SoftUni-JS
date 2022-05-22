function repainting(input) {
    const paint = 21.50;
    const roll_wallpaper = 5.20;
	
  	let paint_number = Number(input[0]); 
    let wallpaper_number = Number(input[1]);
    let price_gloves = Number(input[2]);
    let price_brush = Number(input[3]);
      
    let needed_gloves= wallpaper_number * 0.35;
    let rounded_gloves = Math.ceil(needed_gloves);

    let needed_brushes = paint_number * 0.48;
    let rounded_down_brushes = Math.floor(needed_brushes);
    
    let total_paint_amount = paint * paint_number;
    let total_wallpaper_amount = roll_wallpaper * wallpaper_number;
    let total_gloves_amount = rounded_gloves * price_gloves;
    let total_brushes_amount = rounded_down_brushes * price_brush;

    let final_price = total_paint_amount + total_wallpaper_amount + total_gloves_amount + total_brushes_amount;

    let delivery_cost = final_price * 0.066666666666667;

    console.log(`This delivery will cost ${delivery_cost.toFixed(2)} lv.`);
}