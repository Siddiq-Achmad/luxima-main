import {
  Map,
  MapControls,
  MapMarker,
  MarkerContent,
  MarkerLabel,
  MarkerPopup,
} from "@/components/ui/map";
import { Button } from "@/components/ui/button";
import { Star, Navigation, Clock, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const places = [
  {
    id: 1,
    name: "LUXIMA.ID",
    label: "Studio",
    category: "Studio",
    rating: 4.8,
    reviews: 12453,
    hours: "10:00 AM - 6:00 PM",
    image: "/bg.webp",
    lng: 95.3304,
    lat: 5.5222,
    link: "https://studio.luxima.id",
    direction: "https://maps.app.goo.gl/wLVj93UqT3om8ZEL6",
  },
  {
    id: 2,
    name: "Masjid Raya Baiturrahman",
    label: "Landmark",
    category: "Landmark",
    rating: 4.9,
    reviews: 8234,
    hours: "Open 24 hours",
    image:
      "https://images.unsplash.com/photo-1591017683260-655b616bfb17?q=80&w=400&h=300&fit=crop",
    lng: 95.323753,
    lat: 5.54829,
    link: "",
    direction:
      "https://maps.app.goo.gl/wFAfqihC7whEfb387",
  },
  {
    id: 3,
    name: "Stadion Harapan Bangsa",
    label: "Stadium",
    category: "Stadium",
    rating: 4.7,
    reviews: 5621,
    hours: "06:00 AM - 11:00 PM",
    image:
      "/images/stadion.webp",
    lng: 95.321215,
    lat: 5.5226087,
    link: "",
    direction:
      "https://maps.app.goo.gl/B12L8otvbWif7nJs5"
  },
];

export function LocationMaps() {
  return (
    <div className="h-[500px] w-full">
      <Map center={[95.33, 5.54]} zoom={12}>
        <MapControls
          position="bottom-right"
          showZoom
          showLocate
          showFullscreen
        />
        {places.map((place) => (
          <MapMarker key={place.id} longitude={place.lng} latitude={place.lat}>
            <MarkerContent>
              <div className="size-5 rounded-full bg-primary/85 border-2  border-white/40 shadow-lg cursor-pointer hover:scale-110 transition-transform" />
              <MarkerLabel position="bottom">{place.label}</MarkerLabel>
            </MarkerContent>
            <MarkerPopup className="p-0 w-62">
              <div className="relative h-32 overflow-hidden rounded-t-md">
                <Image
                  fill
                  src={place.image}
                  alt={place.name}
                  className="object-cover"
                />
              </div>
              <div className="space-y-2 p-3">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {place.category}
                  </span>
                  <h3 className="font-semibold text-foreground leading-tight">
                    {place.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="size-3.5 fill-amber-400 text-amber-400" />
                    <span className="font-medium">{place.rating}</span>
                    <span className="text-muted-foreground">
                      ({place.reviews.toLocaleString()})
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Clock className="size-3.5" />
                  <span>{place.hours}</span>
                </div>
                <div className="flex gap-2 pt-1">
                  <Link
                    href={place.direction}
                    target="_blank"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full h-8">
                      <Navigation className="size-3.5 mr-1.5" />
                      Directions
                    </Button>
                  </Link>
                  <Link
                    href={place.link}
                    target="_blank"
                    className="flex-1"
                  >
                    <Button size="sm" variant="outline" className="h-8">
                      <ExternalLink className="size-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </MarkerPopup>
          </MapMarker>
        ))}
      </Map>
    </div>
  );
}
