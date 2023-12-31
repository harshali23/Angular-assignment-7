import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'assignment7.3';

  public Name : string ="Marvellous Infosystems";
  status = true;
  public Fun()
    {
        if(this.status = true)
        {
          this.Name = "Educating for Better Tommorow";
        }
    }
  
    public Name2 : string = "Marvellous Infosystems";
    public Name3 : string = "Marvellous Infosystems";
  
}
