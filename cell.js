class cell
{
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
  }

  show()
  {
    this.cellHeight = windowHeight * ((1 / cells.length) * 0.35);
    this.cellWidth = windowWidth * ((1 / cells[0].length) * .7);

    if(this.y % 2)
    {
      fill(1, 168, 158, 100);
    }
    else
    {
      fill(255, 255, 255, 100);
    }

    if(this.selected == true)
    {
      fill(55, 58, 93, 150);
    }
    else if (this.subSelected == true)
    {
      fill(55, 58, 93, 100);
    }
    // noStroke();
    stroke(1);
    this.xStart = this.x * this.cellWidth;
    this.yStart = this.y * this.cellHeight;
    this.xEnd = this.xStart + this.cellWidth;
    this.yEnd = this.yStart + this.cellHeight;
    rect(this.xStart, this.yStart, this.cellWidth, this.cellHeight);
    maxHeight = this.yEnd;
  }

  select()
  {
    for(let i = 0; i < cols; i++)
    {
      for(let j = 0; j < rows; j++)
      {
        cells[i][j].selected = false;
        cells[i][j].subSelected = false;
      }
    }
    this.selected = true;
    for(let i = 0; i < cols; i++)
    {
      for(let j = 0; j < rows; j++)
      {
        if(cells[i][j].x == this.x || cells[i][j].y == this.y)
        {
          cells[i][j].subSelected = true;
        }
        else
        {
          cells[i][j].subSelected = false;
        }
      }
    }
  }
}
