# GSheets-Column-Reference-Class
Object/class utility usable by GAS projects that allows creation of objects at the column level, allowing ease of use for common column-oriented actions/properties. This is an adoption of the already-working class I have in Excel VBA

##Desired properties/methods:
* **WorksheetReference**  Gets/Set  (object)  A reference to which individual sheet on which the object lives
* **Index**  Get/Set  (number)  The numerical column index. This will auto-update appropriately if the Letter property is set
* **Letter** Get/Set  (string)  The alpha notation of the column. This will auto-update appropriately if the Index property is set
* **ColumnAddress**  Get  (string)  The absolute reference for the entire column ($A:$A)
* **ColumnHeaderAddress**  Get  (string)  Reference to the first row in the column
* **ColumnHeader**  Get  (string)  Value of the first row in the column
* **LetterOffset(number)**  Get  (string)  The letter of the column offset right or left (+/-) by the number passed in
* **GetLastRow**  Get  (number)  The row nmber of the last row with data in the column
* **GetDataCount**  Get  (number)  The number of rows containing data in the column

##Desired methods:
* **FindColumnHeader(string)**  Initiates a ColumnReference object on the column with the given header value. Searches across the top row for the given header value than instantiates a new ColumnRefrence object with that Index and Letter
* **Autofit**  Resizes the column based on the widest data row
* **Find(string)**  Returns the row number of the cell with the given value

##Known Limitations
* Will need some additional error/boundary checking

##Future Enhancements
* Add a sub-method to certain adrress/refrence properties to make them absolute i.e. add dollar signs
  * *ColumnAbsolute*  Only the column has the dollar sign (R$C)
  * *RowAbsolute*  Only the row has the dollar sign ($RC)
  * *Absolute* Both row and oclumn have dollar sign ($R$C)
