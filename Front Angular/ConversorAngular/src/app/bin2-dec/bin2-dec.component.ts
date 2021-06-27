import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ConversorService } from '../conversor.service'

@Component({
  selector: 'app-bin2-dec',
  templateUrl: './bin2-dec.component.html',
  styleUrls: ['./bin2-dec.component.less']
})
export class Bin2DecComponent implements OnInit {

  form: FormGroup
  convertido!: number
  constructor(
    private fb : FormBuilder,
    private conversorService: ConversorService,
    private cdr : ChangeDetectorRef) {
      this.form = this.fb.group({
        valor: [null,[Validators.required]]
      })
    }

  ngOnInit(): void {
  }

  converter(){
    if(this.form.invalid){
      alert('preencha o valor!')
      return
    }
    this.conversorService
      .bin2dec(this.form.controls.valor.value)
      .subscribe((res:any) =>{
        this.convertido = 0
        this.convertido = res
        console.log(res)
        this.cdr.detectChanges()
      })
  }

}
