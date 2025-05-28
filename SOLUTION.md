SOLUTION
========

Estimation
----------
Estimated: 4-6 hours

Spent: ~5 hours

Solution
--------
Comments on your solution

# Solution Documentation

## Architecture

I decided to use (FSD) architecture:

### Technology Stack:
- **React 18** - main framework
- **React Query (@tanstack/react-query)** - server state management and caching
- **Axios** - HTTP client for API requests
- **Zustand** - lightweight state manager for client state (filters)
- **Tailwind CSS** - for styling
- **json-server** - mock API server

### FSD Structure:
```
src/
├── app/              # Application configuration, providers
├── pages/            # Application pages
├── widgets/          # Complex UI components
├── features/         # Business functionality
├── entities/         # Business entities
└── shared/           # Reusable modules
```

## Test Cases

### Test Case 1: Basic Products Display
```gherkin
GIVEN user opens the products page
WHEN the page loads
THEN the filters sidebar is displayed
AND a table/grid with 12 products is displayed
AND pagination is displayed
AND total number of products is greater than 12
```

### Test Case 2: Search by "Dog" tags
```gherkin
GIVEN user is on the products page
WHEN user enters "Dog" in the tag search field
THEN 11 products containing the "Dog" tag are displayed
AND pagination updates accordingly
AND active filters counter shows 1
```

### Test Case 3: Price Filtering
```gherkin
GIVEN user is on the products page
WHEN user enters "30" in the price filter field
THEN only products with price 30 are displayed
AND result contains approximately 1 product
AND message about number of found products is displayed
```

### Test Case 4: Combined Filters
```gherkin
GIVEN user is on the products page
WHEN user selects "Subscription: Yes" in the subscription filter
AND enters "Cat" in the tag search field
THEN 5 products with subscription containing "Cat" tag are displayed
AND active filters counter shows 2
AND there is a "Clear All Filters" button
```

### Test Case 5: Reset Filters (Edge case)
```gherkin
GIVEN user has applied multiple filters
AND a limited set of products is displayed
WHEN user clicks "Clear All Filters"
THEN all filters are reset
AND full list of products (12 items) is displayed
AND pagination returns to the first page
```

### Test Case 6: Handling Empty Results (Edge case)
```gherkin
GIVEN user is on the products page
WHEN user enters a non-existent tag or price
THEN "No products found" message is displayed
AND suggestion to adjust filters is provided
AND filters sidebar remains active
```

### Test Case 7: Pagination During Filtering (Edge case)
```gherkin
GIVEN user is on the second page of products
WHEN user applies any filter
THEN pagination automatically returns to the first page
AND filtered results are displayed
```

## Time Estimation

### Initial Estimate: 4-6 hours
- Architecture and dependencies setup: 1 hour
- API layer and React Query creation: 1 hour
- Filter components development: 1 hour
- Products grid and pagination creation: 1 hour
- Integration and testing: 1.5 hours

### Actual Time: ~5 hours

## Possible Improvements

1. **Performance**:
   - List virtualization for large datasets
   - Re-render optimization with React.memo
   - Lazy image loading

2. **UX/UI**:
   - Skeleton loading states
   - Drag & drop for order changes
   - Advanced filters (price range, multiple tag selection)
   - Filter state persistence in URL

3. **Functionality**:
   - Add products to favorites
   - Product comparison
   - Product list export
   - Sorting (by price, name, popularity)

4. **Technical**:
   - TypeScript addition
   - Unit and E2E tests
   - Error boundaries
   - Offline support (PWA)
   - User action analytics