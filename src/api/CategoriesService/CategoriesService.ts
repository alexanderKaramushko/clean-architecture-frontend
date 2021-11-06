import CrudService from 'api/CrudService';

// todo needs CategoryNodel from back
class CategoriesService extends CrudService<unknown[]> {

  constructor() {
    super('categories');
  }

}

export default CategoriesService;
