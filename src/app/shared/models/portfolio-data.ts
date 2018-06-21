import { InMemoryDbService } from "angular-in-memory-web-api";

import { Portfolio } from "./portfolio-model";

export class PortfolioData implements InMemoryDbService {

  createDb() {
    const portfolioList: Portfolio[] = [
      {
        id: 1,
        projectType: 'personal',
        description: 'Golf Club Website',
        company: 'Iron Maidens',
        starRating: 4.6
      },
      {
        id: 2,
        projectType: 'business',
        description: 'ECommerce Billing Suite',
        company: 'Hosting',
        starRating: 3.9

      },
      {
        id: 2,
        projectType: 'business',
        description: 'Website Style Guide',
        company: 'Tonic',
        starRating: 5
      },
    ];
    return { portfolioList };
  }
}
