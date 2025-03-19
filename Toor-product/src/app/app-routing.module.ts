import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // Homepage
  { path: '', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule), data: { breadcrumb: "Homepage" } },
  { path: 'home-v2', loadChildren: () => import('./components/pages/home-two/home-two.module').then(m => m.HomeTwoModule), data: { breadcrumb: "Homepage" } },
  // About
  { path: 'about', loadChildren: () => import('./components/pages/about/about.module').then(m => m.AboutModule), data: { breadcrumb: "About Us" } },
  // Blog
  { path: 'blog/cat/:catId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/tag/:tagId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/author/:authorId', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog/search/:query', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-grid', loadChildren: () => import('./components/pages/blog-grid/blog-grid.module').then(m => m.BlogGridModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-grid-left', loadChildren: () => import('./components/pages/blog-grid-left/blog-grid-left.module').then(m => m.BlogGridLeftModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-grid-right', loadChildren: () => import('./components/pages/blog-grid-right/blog-grid-right.module').then(m => m.BlogGridRightModule), data: { breadcrumb: "Blog Grid" } },
  { path: 'blog-details/:id', loadChildren: () => import('./components/pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule), data: { breadcrumb: "Blog Details" } },
  { path: 'blog-details-left/:id', loadChildren: () => import('./components/pages/blog-details-left/blog-details-left.module').then(m => m.BlogDetailsLeftModule), data: { breadcrumb: "Blog Details" } },
  { path: 'blog-details-right/:id', loadChildren: () => import('./components/pages/blog-details-right/blog-details-right.module').then(m => m.BlogDetailsRightModule), data: { breadcrumb: "Blog Details" } },
  // Hotels
  { path: 'hotel/:minPrice/:maxPrice', loadChildren: () => import('./components/pages/hotels-grid/hotels-grid.module').then(m => m.HotelsGridModule), data: { breadcrumb: "Hotels Grid" } },
  { path: 'hotel-grid', loadChildren: () => import('./components/pages/hotels-grid/hotels-grid.module').then(m => m.HotelsGridModule), data: { breadcrumb: "Hotels Grid" } },
  { path: 'hotel-grid-left', loadChildren: () => import('./components/pages/hotels-grid-left/hotels-grid-left.module').then(m => m.HotelsGridLeftModule), data: { breadcrumb: "Hotels Grid" } },
  { path: 'hotel-grid-right', loadChildren: () => import('./components/pages/hotels-grid-right/hotels-grid-right.module').then(m => m.HotelsGridRightModule), data: { breadcrumb: "Hotels Grid" } },
  { path: 'hotel-details/:id', loadChildren: () => import('./components/pages/hotels-details/hotels-details.module').then(m => m.HotelsDetailsModule), data: { breadcrumb: "Hotels Details" } },
  // Flights
  { path: 'flight/:minPrice/:maxPrice', loadChildren: () => import('./components/pages/flights-grid/flights-grid.module').then(m => m.FlightsGridModule), data: { breadcrumb: "Flights Grid" } },
  { path: 'flight-grid', loadChildren: () => import('./components/pages/flights-grid/flights-grid.module').then(m => m.FlightsGridModule), data: { breadcrumb: "Flights Grid" } },
  { path: 'flight-grid-left', loadChildren: () => import('./components/pages/flights-grid-left/flights-grid-left.module').then(m => m.FlightsGridLeftModule), data: { breadcrumb: "Flights Grid" } },
  { path: 'flight-grid-right', loadChildren: () => import('./components/pages/flights-grid-right/flights-grid-right.module').then(m => m.FlightsGridRightModule), data: { breadcrumb: "Flights Grid" } },
  { path: 'flight-details/:id', loadChildren: () => import('./components/pages/flights-details/flights-details.module').then(m => m.FlightsDetailsModule), data: { breadcrumb: "Flights Details" } },
  // Cars
  { path: 'car/:minPrice/:maxPrice', loadChildren: () => import('./components/pages/cars-grid/cars-grid.module').then(m => m.CarsGridModule), data: { breadcrumb: "Cars Grid" } },
  { path: 'car-grid', loadChildren: () => import('./components/pages/cars-grid/cars-grid.module').then(m => m.CarsGridModule), data: { breadcrumb: "Cars Grid" } },
  { path: 'car-grid-left', loadChildren: () => import('./components/pages/cars-grid-left/cars-grid-left.module').then(m => m.CarsGridLeftModule), data: { breadcrumb: "Cars Grid" } },
  { path: 'car-grid-right', loadChildren: () => import('./components/pages/cars-grid-right/cars-grid-right.module').then(m => m.CarsGridRightModule), data: { breadcrumb: "Cars Grid" } },
  { path: 'car-details/:id', loadChildren: () => import('./components/pages/cars-details/cars-details.module').then(m => m.CarsDetailsModule), data: { breadcrumb: "Cars Details" } },
  // Cruise
  { path: 'cruise/:minPrice/:maxPrice', loadChildren: () => import('./components/pages/cruise-grid/cruise-grid.module').then(m => m.CruiseGridModule), data: { breadcrumb: "Cruise Grid" } },
  { path: 'cruise/:minNight/:maxNight', loadChildren: () => import('./components/pages/cruise-grid/cruise-grid.module').then(m => m.CruiseGridModule), data: { breadcrumb: "Cruise Grid" } },
  { path: 'cruise-grid', loadChildren: () => import('./components/pages/cruise-grid/cruise-grid.module').then(m => m.CruiseGridModule), data: { breadcrumb: "Cruise Grid" } },
  { path: 'cruise-grid-left', loadChildren: () => import('./components/pages/cruise-grid-left/cruise-grid-left.module').then(m => m.CruiseGridLeftModule), data: { breadcrumb: "Cruise Grid" } },
  { path: 'cruise-grid-right', loadChildren: () => import('./components/pages/cruise-grid-right/cruise-grid-right.module').then(m => m.CruiseGridRightModule), data: { breadcrumb: "Cruise Grid" } },
  { path: 'cruise-details/:id', loadChildren: () => import('./components/pages/cruise-details/cruise-details.module').then(m => m.CruiseDetailsModule), data: { breadcrumb: "Cruise Details" } },
  // Contact
  { path: 'contact', loadChildren: () => import('./components/pages/contact/contact.module').then(m => m.ContactModule), data: { breadcrumb: "Contact Us" } },

  // Authentification

    {
      path: 'login',
      loadChildren: () => import('./components/pages/Authentification/login/login.module').then(m => m.LoginModule),
       data: { breadcrumb: "Login" }
    },

      { path: 'sign-up-agence',
        loadChildren: () => import('./components/pages/Authentification/sign-up-agence/signUpAgence.module').then(m => m.SignUpAgenceModule),
        data: { breadcrumb: "Sign Up Agence" }
      },
    { path: 'sign-up-client',
      loadChildren: () => import('./components/pages/Authentification/sign-up-client/signUpClient.module').then(m => m.SignUpClientModule),
       data: { breadcrumb: "Sign Up Client" }
    },
   // Nouvelle route pour le tableau de bord
       {
         path: 'tableau-de-bord-agence',
         loadChildren: () => import('./components/pages/tableau-de-bord/tableau-de-bord-agence/tableau-de-bord-agence.module').then(m => m.TableauDeBordAgenceModule),
         data: { breadcrumb: "Tableau de Bord" }
       },



    {
        path: 'tableau-de-bord-admin',
        loadChildren: () => import('./components/pages/tableau-de-bord/tableau-de-bord-admin/tableau-de-bord-admin.module').then(m => m.TableauDeBordAdminModule),
        data: { breadcrumb: "Tableau de Bord Admin" }
      },

     {
            path: 'tableau-de-bord-client',
            loadChildren: () => import('./components/pages/tableau-de-bord/tableau-de-bord-client/tableau-de-bord-client.module').then(m => m.TableauDeBordClientModule),
            data: { breadcrumb: "Tableau de Bord Client" }
          },

// detail voyage

  { path: 'voyage-details/:id', loadChildren: () => import('./components/pages/voyage-details/voyage-details.module').then(m => m.VoyageDetailsModule), data: { breadcrumb: "voyage Details" } },

  // Faqs
  { path: 'faqs', loadChildren: () => import('./components/pages/faqs/faqs.module').then(m => m.FaqsModule), data: { breadcrumb: "FAQ's" } },
  // Booking
  { path: 'booking', loadChildren: () => import('./components/pages/booking/booking.module').then(m => m.BookingModule), data: { breadcrumb: "Booking" } },
  // Gallery
  { path: 'gallery', loadChildren: () => import('./components/pages/gallery/gallery.module').then(m => m.GalleryModule), data: { breadcrumb: "Gallery" } },
  // Additional
  { path: 'error-page', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } },
  { path: 'coming-soon', loadChildren: () => import('./components/pages/coming-soon/coming-soon.module').then(m => m.ComingSoonModule), data: { breadcrumb: "Coming Soon" } },
  { path: '**', loadChildren: () => import('./components/pages/error-page/error-page.module').then(m => m.ErrorPageModule), data: { breadcrumb: "Error 404" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
