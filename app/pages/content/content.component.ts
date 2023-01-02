import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  {dataFake} from '../../data/dataFake'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string="https://broadcom.com/media/blt4ac44e0e6c6d8341/blt476a993c2707b028/62e16f3bd3b8a5700456394e/wwwBlog_dc_Networking_1170x600.jpg"
  contentTitle:string=""
  contentDescription:string | undefined = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }
  setValuesToComponent(id:string | null){
    const result = dataFake.filter(
      article => article.id == id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
      }
  }

