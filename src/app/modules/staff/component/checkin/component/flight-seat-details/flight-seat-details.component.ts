import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../../../../shared/service/common.service';

@Component({
  selector: 'app-flight-seat-details',
  templateUrl: './flight-seat-details.component.html',
  styleUrls: ['./flight-seat-details.component.scss']
})
export class FlightSeatDetailsComponent implements OnInit {
flightDetails:any=[];
flightDetail:any=[];
seatStatus:string='checkin';
id:number;
checkin:boolean;
passengerDetails:any=[];
passengerDetail:any=[];
flightId:number;
isLoading=false;
  constructor(private commonService:CommonService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getFlightDetailsBySeats();
    
    this.getPassengerDetails();
  }


  getFlightDetailsBySeats(){
    this.isLoading=true;
    this.commonService.getFlightDetails().subscribe(data=>{
      this.flightDetail=data;
      this.route.params.subscribe(queryParams=>{
        this.id=this.getIndex(+queryParams.id);
        console.log(this.id);
      });
      this.flightDetails=data[this.id].seats;
      
      console.log(this.flightDetails);
      this.isLoading=false;
    });
  }
  tab(status:string){
    this.seatStatus=status;
  }

  getPassengerDetails(){
    
    this.commonService.getPassengerDetails().subscribe(data=>{
      this.passengerDetails=data;
      this.passengerDetail=data;
    });

  }

  getIndex(fId:number){
    console.log(fId);
    for(let i=0;i<this.flightDetail.length;i++){
      if(this.flightDetail[i].flightid==fId){
        return i;
      }
    }
    return -1;
  }

  passengerCheckinInPassenger(flightId:number,seatNo:string){
    for(let i=0;i<this.passengerDetail.length;i++){
      if(this.passengerDetail[i].flightid==flightId && this.passengerDetail[i].seatNo==seatNo){
        this.passengerDetail[i].checkin=this.checkin;
      }
    }
    this.commonService.passengerCheckinInPassenger(this.passengerDetail).subscribe(()=>{
      if(this.checkin){
        alert("Successfully checked in");
      }
      else{
        alert("successfully undo checkin");
      }
      
    });
  }

  passengerCheckinInFlight(seatNo:string){
    this.flightId=this.flightDetail[this.id].flightid;
    console.log(this.flightId);
    let flightDetails=this.flightDetail;
    for(let i=0;i<flightDetails.length;i++){
      if(flightDetails[i].flightid==this.flightId){
        for(let j=0;j<flightDetails[i].seats.length;j++){
          if(flightDetails[i].seats[j].sno==seatNo){
            if(flightDetails[i].seats[j].booked){
              if(flightDetails[i].seats[j].checkin){
                flightDetails[i].seats[j].checkin=false;
                this.checkin=false;
                break;
              }
              else{
                flightDetails[i].seats[j].checkin=true;
                this.checkin=true;
                break;
              }
            }
            
        }
      }
      }
    }
    //console.log(flightDetails);
    this.commonService.passengerCheckinInFlight(flightDetails).subscribe();
    this.passengerCheckinInPassenger(this.flightId,seatNo);
  }
}
