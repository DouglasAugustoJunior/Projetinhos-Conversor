import { Component, OnInit } from '@angular/core'
import { ConversorService } from './conversor.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  title = 'ConversorAngular'
  showErro: any

  constructor(private conversorService: ConversorService) { }

  ngOnInit(){
    this.conversorService.testaConexao().subscribe((res:any) => {
      this.showErro = res
    })
  }

}