export const codes = [
  {
    key: "code2",
    title: "Vector STL - Demo",
    tags: [
      "vector",
      "size",
      "capacity",
      "memory allocate",
      "push",
      "pop",
      "fill constructor",
    ],
    code: `
/* note: 
    -----Vector STL: Standard Template Library-----    
    1. Dynamic array
    2. sequantail container reprensting arrays
    3. contiguous storage, accessed in O(1).
    4. it double itself 
    (at memory level:
    container class create new array of 
    double size, previous one distoryed)
    5. passed by value to function by default.
        void fn (vector<int> v){} // by value 
    (but can be pass by refence is needed.)
        void fn (vector<int> &v){} // by reference
    6. https://www.cplusplus.com/reference/vector/vector/
*/

#include <iostream>
#include <vector>
using namespace std;
int main(){
    // normal decleration
  vector<int> array = {1, 3, 5, 6, 5};

  // fill contructor
  vector<int> array(5, 7); // 5 element each with value: 7
  
  /* note: while adding value in initialization
            size = capacity.

            but if we add value by pushing in vector then
            2 * size = capacity.
    */

  /* push_back : insert value at the end in 
                  constant time i.e.O(1) 
    */
//    array.push_back(7);

    /* pop_back : delete value at the end in 
                    constant time i.e.O(1) 
        */

    array.pop_back();

  // print all the elements
  for (int index = 0; index < array.size(); index++){
      cout << array[index] << endl;
  }

  // size  of the vector( No of elements)
  cout << "Size: " << array.size()<<endl;

  // capacity of the vector
  cout << "Capcity: " << array.capacity()<<endl;
}
`,
  },
  {
    key: "code1",
    title: "Array Decleration Types",
    tags: ["array", "decleration"],
    code: `
          #include <iostream>
          #include <string>
          using namespace std;

          int main(){
            cout<< "Program starts " << endl;
            
            // decleration of array
            int a[100]; // garbage values
            int b [100] = {0}; // all 0
            int c [100] = {1,2,3}; // 1 2 3 rest (97 => 0)
            int d[] = {1, 2, 3}; // only => 1 2 3

            // printing array 
            cout << a << endl; // 0xe12a1ff720
            cout << b << endl; // 0xe12a1ff590
            cout << c << endl; // 0xe12a1ff400
            cout << d << endl; // 0xe12a1ff3f4

            // print array output
            for (const int &n: d){
                cout << n << " ";
            }
            return 0;
        }
    `,
  },
];
