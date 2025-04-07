import JSEncrypt from 'jsencrypt';

function crypt(data: string | undefined): string {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(
    '-----BEGIN PUBLIC KEY-----\n' +
      'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqyqlHxGxiysEeX7plxSI\n' +
      'EA1N+gL+hbFZCuk+bX5zDsKqEdi0omtj1n/Fk9bEOuhbxoCaR6++Hk/WUa1+sAtC\n' +
      '9uyqyxFY5ECdvwi+K/ETxV8erufn+dPZJPAB7vn441FigxAcmqutpqJcGmaG5NhJ\n' +
      'TudX9foWVLDp4M8qwY+qTAvJPhS7321cwim4h8DEWRQ8hp29HU0s8hACzyUIJHP1\n' +
      'Bqkmkg01IRWEpwot8Ec3ljPdgKQ8ATZYWzWO6t+uHW/0K3m7PJYAmodJur2yHpSg\n' +
      'QOygBviMSR/eJk7yT42Xivr9JJxwDVzxN0VkRIHdbB38A7J3y4CWJDtg7/guczLu\n' +
      'oQIDAQAB\n' +
      '-----END PUBLIC KEY-----',
  );
  return encryptor.encrypt(<string>data) as string;
}

export { crypt };
