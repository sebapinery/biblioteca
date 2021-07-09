import { search } from '../dbSql/repository/search.repository'

export const searchController = (req, res) => {
  const querys = req.query;


  if(Object.entries(querys).length > 1 || Object.entries(querys).length === 0){
    res.json({message: 'Solo puede buscar por un query.'})
  }else{
    Object.entries(querys).forEach(async ([key, value]) => {
      if (key) {
        try {
          const searchResult = await search(key,value);
          res.json(searchResult);
        } catch (error) {
          res.status(500).json({ error: error.message });
        }
      }
    })
  }

  ;
};
