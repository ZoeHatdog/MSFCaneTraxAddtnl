const request = require('supertest');
const mockConsignment = require('./mock/consignment.json');



jest.mock('../services/GetConsignment', () => {
  const { Consignment } = jest.requireActual('../services/GetConsignment');
  return {
    fetchConsignmentOTW: jest.fn(),
    Consignment,
  };
});

const { fetchConsignmentOTW, Consignment } = require('../services/GetConsignment');
const app = require('../server');

describe('Consignment controller', () => {
  beforeEach(() => {
    fetchConsignmentOTW.mockReset();
  });

  it('GET /api/consignment/consignment-OTW returns 200 and mock consignment data', async () => {
    fetchConsignmentOTW.mockResolvedValue(mockConsignment);

    const res = await request(app).get('/api/consignment/consignment-OTW');

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe('Success Fetching Consignment Cards');
    expect(res.body.data).toEqual(mockConsignment);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBe(mockConsignment.length);
  });

  it('controller sends error response when fetch fails', async () => {
    fetchConsignmentOTW.mockRejectedValue(new Error('Service error'));

    const res = await request(app).get('/api/consignment/consignment-OTW');

    expect(res.status).toBe(500);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe('Service error');
  });
});




// THIS TEST FOR COUNTING CONSIGNMENT ID 
describe('Get # Consignment All', () => {
    beforeEach(() => {
        fetchConsignmentOTW.mockReset();
    });

  it('getNumberOfConsignment returns count of consignment from mock data', () => {
    const consignment = new Consignment();
    const total = consignment.getNumberofConsignments(mockConsignment);
    console.log("Total consignments: " + total);

    expect(total).toBe(3); 
  });

  it('getNumberOfConsignmentCards returns 0 for empty array', () => {
    const consignment = new Consignment();
    const total = consignment.getNumberofConsignments([]);
    

    expect(total).toBe(0);
  });


  describe('Get Consignment on the way to the factory', () => {
    beforeEach(() => {
        fetchConsignmentOTW.mockReset();
    });

    it('getNumberofConsigments on the way to the factory', () => {
        const consignment = new Consignment();
        const total = consignment.getNumberOfConsignmentOTW(mockConsignment);
        console.log("Total consignments on the way to the factory: " + total);
        expect(total).toBe(1);
    });
  });
});
