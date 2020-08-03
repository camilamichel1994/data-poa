import { Component, OnInit } from '@angular/core';
import { ItineraryService } from '../../services/itinerary.service';
import { ActivatedRoute } from '@angular/router';
import { Itinerary } from '../../model/itinerary.model';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {

  itinerary: Itinerary[] = [];
  faMapMarkerAlt = faMapMarkerAlt;
  isLoading: Boolean = false;
  hasError: Boolean = false;

  p: Number = 1 ;
  contador: Number = 10;

  constructor(
    private itineraryService: ItineraryService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.itineraryService.findItinerary(id).subscribe(res => {
      const arrayResult = Object.values(res);
      arrayResult.splice(this.itinerary.length - 3, 3)
      this.itinerary = arrayResult;
      this.isLoading = false;
    },
    error => {
      this.isLoading = false;
      this.hasError = true;
    });
  }
}
