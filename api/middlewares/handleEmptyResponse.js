const handleEmptyResponse = (req, res, next) => {
    const originalJson = res.json;
  
    res.json = function (data) {
      if (Array.isArray(data) && data.length === 0) {
        return res.status(404).json({ message: 'No se encontraron datos con la consulta actual.' });
      }
  
      return originalJson.apply(res, arguments);
    };
  
    next();
  };
  
  module.exports = { handleEmptyResponse };
  
  