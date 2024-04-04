import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.scss'
})
export class DashBoardComponent implements OnInit {
  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];
  

  ngOnInit(){
    this.Designation = 'Team Leader';
    this.Username = 'Scott Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
    this.Clients=["ABC Infotexh","DEF Solutions","GHI industries"]
    this.Projects=["Project A ","Project B","Project C","Project C"]
    for (let index = 2019; index > 2010; index--) {
      this.Years.push(index);
      
    }
    this.TeamMembersSummary=[
      {Region:"EAST",Count:10,Unavailable:5},
      {Region:"WEST",Count:15,Unavailable:15},
      {Region:"NORTH",Count:12,Unavailable:10},
      {Region:"SOUTH",Count:13,Unavailable:20}
    ]
    this.TeamMembers=[
      {Region:"EAST", Members:[
        {ID:1,Name:"Ford",Available:"YES"},
        {ID:2,Name:"TOM",Available:"YES"},
        {ID:3,Name:"Nelson",Available:"YES"}
      ]  },  
      {Region:"WEST", Members:[
        {ID:1,Name:"Ford",Available:"BUSY"},
        {ID:2,Name:"TOM",Available:"BUSY"},
        {ID:3,Name:"Nelson",Available:"BUSY"}
      ]  },
      {Region:"SOUTH", Members:[
        {ID:1,Name:"Ford",Available:"NO"},
        {ID:2,Name:"TOM",Available:"NO"},
        {ID:3,Name:"Nelson",Available:"NO"}
      ]  },
      {Region:"NORTH", Members:[
        {ID:1,Name:"Ford",Available:"AWAY"},
        {ID:2,Name:"TOM",Available:"AWAY"},
        {ID:3,Name:"Nelson",Available:"AWAY"}
      ]  },
    ]
  }

}
