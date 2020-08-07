---
title: Are they really so different?
date: 2020-08-07
excerpt: Comparision between C, C++ and C#
tags: ["c","c++","c#"]
---

What makes these languages so different? Don't they have the same features?
They all have C in their name so they must be alike? Which one should I use? 

Lets dive in!

## C

#### History
C is the granddaddy of them all. C was designed in **AT&T’s Bell Labs**,
primarily by **Dennis Ritchie**. C was designed
to replace the interpreted language B for Unix. This history leads to
C becoming almost a portable assembler with a few conveniences and
simplifications.

#### Design
C’s design comes down to assuming the programmer has a solid idea of what they
are doing. C provides very few high-level data structures or algorithms in its
standard library, leaving the programmer to make them. C is also known for its
ability to deal with memory at a low level and weak type system. This means
that C code is more prone to vulnerabilities and bugs, but can be made
lightning fast and deal with low-level aspects of your machine.

#### Usage
Today, C is frequently used when you need to write glue code between different
languages or to extend higher-level languages. You will also find most
operating system kernels are partially or entirely written in C. Finally, C is
still very common in embedded systems due to its low footprint compared to most
modern languages.

#### Code

```c
#include <stdio.h>
int main() {
   // printf() displays the string inside quotation
   printf("Hello, World!");
   return 0;
}
```

## C++

#### History
Don’t be fooled by the name, C++ is not C. C++ was initially created by **Bjarne
Stroustrup** as an extension of C, but that is about as far as being a true
superset went. Early versions of C++ were preprocessor hacks to fake object
oriented design, but eventually became its own language.

#### Design
C++ deviates heavily from C’s design. C++ comes closer to including the
batteries, giving you implementations of some data structures and algorithms in
its standard library. If the standard library does not satisfy your needs, you
are given the tools to roll your own in at least a dozen different styles.
Finally, C++ has a much stronger type system. You can no longer implicitly
convert one type to another unless a conversion exists, though the language
will tend to assume you know what you are doing if you explicitly cast. This
difference leads to many valid C programs not compiling under C++.

#### Usage
C++ is frequently used when performance is necessary, but C would take too much
time to write. This includes professional software suites, 3D games, and user
applications where performance is an issue. C++ is typically not used in OS
kernels or embedded systems because the language is somewhat feature-bloated.
Your OS can’t just stop because C++ decided to throw an exception!
Nevertheless, C++ is a solid choice when it comes to performance-sensitive user
applications.

#### Code

```c
#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
```

## C#

#### History
C# came around when Microsoft saw Java’s success. Due to Java being able to run
anywhere, they decided they needed a similar language that was exclusive to the
Microsoft ecosystem. However, C# is now available on most platforms through
either Mono or .NET Core.

#### Design
C# borrows a lot from Java’s design philosophy. C# is a heavily object-oriented
language that comes with a rich standard library all while protecting
programmers from their own stupidity when possible. This gets rid of C and C++
features like manual memory management and low-level access for the most part.
C# has a strong type system, as well as garbage collection to get rid of unused
memory.

#### Usage
C# is primarily used in the Windows ecosystem, as previously noted. Due to its
large standard library and conveniences, it is used when you need to ship your
software and are willing to sacrifice some performance and low-level control to
do so. C# is also prominent for web development with the use of ASP.NET.

#### Code

```java
namespace HelloWorld
{
    class Hello {         
        static void Main(string[] args)
        {
            System.Console.WriteLine("Hello World!");
        }
    }
}
```

# Summary
With all of that out of the way, you can see why we have C, C++, and C#. It all
comes down to the philosophy of each language. Trying to use one of these
languages in a project it is not suited for, you will eventually end up
fighting with the language and be unable to get anything done. Make sure you
choose the tool for the job, and try to have an understanding of the other
tools available to you.


