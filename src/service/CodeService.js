export const codes = [
  {
    key: "code7",
    web: "http://codeforces.com/problemset/problem/617/A",
    title: "B. Queue at the School",
    tags: ["800", "math"],
    code: `
    #include <iostream>
    using namespace std;
     
    int main(){
        int x, temp,result = 0, moves[5] = {5, 4, 3, 2, 1};
        cin >> x;
        for(int move = 0; move < 5; move++){
            if( x >= moves[move] ){
                result += (temp = x/moves[move]);
                x -=temp*moves[move];
            }
        }
            
        cout << result <<"\n";
        return 0;
    }
    `,
  },
  {
    key: "code6",
    web: "http://codeforces.com/problemset/problem/266/B",
    title: "B. Queue at the School",
    tags: [
      "800",
      "constructive algorithms",
      "graph matchings",
      "implementation",
      "shortest paths",
    ],
    code: `
    #include <iostream>
#include <string>
#include <cstdio>
#include <cstring>
using namespace std;
char str[51], s;
 
int main() {
    int n, t;
    cin >> n >> t;
    cin >> str;
    for (int i = 0; i < t; i++){
        for (int j = 0; j < n;){
            if(str[j] == 'B' && str[j+1] == 'G'){
                s = str[j+1];
                str[j+1] = str[j];  
                str[j] = s;
                j+=2;
            }
            else j++;
        }
    }
    cout << str;
    return 0;
}
    `,
  },
  {
    key: "code5",
    web: "http://codeforces.com/problemset/problem/469/A",
    title: "A. I Wanna Be the Guy",
    tags: ["800", "greedy", "implementation"],
    code: `
    #include <iostream>
using namespace std;
int level[105];

bool search (int arr[], int size, int ele){
    if (arr[size - 1] == ele)
        return true;
    int backup = arr[size-1];
    arr[size-1] = ele;

    for (int i = 0;;i++){
        if(arr[i] == ele){
            arr[size-1] = backup;
            if(i < size-1)
                return true;
            return false;
        }
    }
}

int main() {
    bool win = false;
    int n, p, q;
    cin >> n;
    
    cin >> p;
    
    for (int i = 0; i < p; i++){
        cin >> level[i];
    }
    
    cin >> q;
    
    for (int i = p; i < p+q; i++){
        cin >> level[i];
    }
    
    for (int i = 1; i <= n; i++){
        if (search(level, p+q, i)){
            win = true;
        }
        else{
            win = false;
            break;
        }
    }

    if (win)
        cout << "I become the guy." << endl;
    else
        cout << "Oh, my keyboard!" << endl;

    return 0;
}
    `,
  },
  {
    key: "code4",
    web: "",
    title: "FizzBuzz Exercise",
    tags: ["exercise", "push", "fizzbuzz", "vector<string>", "output"],
    code: `
/* note: 
    -----FizzBuzz Test-----    
    write fizzbuzz function which return vector<string> with
    number from 1 to n write the following restrictions:
    -> for multiple of 3 store "Fizz" instead of number
    -> for multiple of 5 store "buzz" instead of number
    -> for numbers which are multiple of both 3 and 5 
        store "FizzBuzz"
    use std::to_string(number) method to convert a number into string.

    "side note on sorting".

    Inbuilt Sort Function:
      Some problems may require the use of a sorting algorithm, 
      and I hope you are already familiar with basic sorting algorithms 
      like Bubble Sort, Selection Sort, Insertion Sort which have O(n^2) complexity. 
      Better algorithms include Merge Sort, Quick Sort and Heap Sort which 
      have O(nLogn) complexity.

      For most array problems we can use the inbuilt sort function which also offers 
      O(nlogn) complexity. This is how you can use the inbuilt sort function in case you 
      are not aware of. Also depending upon the data in the problem, you may also require 
      Counting Sort, or Bucket Sort or Radix Sort sometimes.  We will discuss more problems 
      in Sorting & Searching section.

      Sort an array containing N integers:
      -> sort(arr, arr +n)

      Sort an vector containing N integers:
      -> sort(arr.begin(), arr.end())
*/

#include <iostream>
#include <string>
#include <vector>
using namespace std;

// function defination
vector<string> fizzbuzz(int n){
  vector<string> result;
  for (int index = 1; index <= n; index++){
      result.push_back((
          (index % 15 == 0) 
          ? "FizzBuzz" 
          : ((index % 5 == 0) 
              ? "Buzz" 
              : ((index % 3 == 0) 
                  ? "Fizz" 
                  : to_string(index))) 
      ));
      
      // another approach
      // if (n % 3 == 0 && n % 5 == 0) result.push_back("FizzBuzz");
      // else if (n % 5 == 0) result.push_back("Buzz");
      // else if (n % 3 == 0) result.push_back("Fizz");
      // else result.push_back(to_string(index));
  }
  
  return result;
}

// driver code
int main(){
  cout << 'FizzBuzz Test' << endl;
  vector<string> output = fizzbuzz(10);
  for (string s : output){
      cout << s << ",";
  }
  
  return 0;
}
    `,
  },
  {
    key: "code3",
    web: "",
    title: "Vector of Vector - Demo",
    tags: [
      "vector",
      "2D",
      "decleration",
      "initialisation",
      "foreach loop",
      "output",
    ],
    code: `
  #include <iostream>
  #include <vector>
  using namespace std;
  int main(){
  // 2D vector
  vector<vector<int>> array = {
      {0, 2, 3},
      {4, 5, 6},
      {7, 8, 9, 10},
      {11, 12}
  };
  
  // increment at particular position
  array[0][0] += 10;
  
  // printing the 2D array
  // normal for loop
  for(int index = 0; index < array.size(); index++){
      // for each loop
      for(int number: array[index] )
          cout << number << ',';
      cout << endl;
  }
  return 0;
  }
    `,
  },
  {
    key: "code2",
    web: "",
    title: "Vector STL - Demo",
    tags: [
      "vector",
      "1D",
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
    web: "",
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
